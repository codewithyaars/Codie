import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBHnmhIl26IaKYw_LyD708fpvrD6_aQM-s';
const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  async generateSummary(videoContent: string): Promise<string> {
    try {
      const prompt = `Generate a concise summary of this programming lesson content: ${videoContent}. Focus on key learning points and practical applications.`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating summary:', error);
      return 'Summary generation failed. Please try again later.';
    }
  }

  async chatResponse(message: string): Promise<string> {
    try {
      const prompt = `You are an expert programming tutor for CODIEE platform, specializing in HTML, CSS, JavaScript, and web development. Provide detailed, helpful, and encouraging responses. Always be supportive and educational. Question: ${message}`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating chat response:', error);
      return 'I apologize, but I encountered a technical issue. Please try asking your question again, and I\'ll do my best to help you with your programming journey!';
    }
  }

  async predictLearningPath(completedLessons: string[], currentCourse: string): Promise<string> {
    try {
      const prompt = `Based on completed lessons: ${completedLessons.join(', ')} in ${currentCourse}, predict the best next learning steps and career outcomes. Provide encouraging and specific guidance.`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error predicting learning path:', error);
      return 'Unable to generate learning predictions at this time.';
    }
  }

  async reviewCode(code: string): Promise<string> {
    try {
      const prompt = `As a senior code reviewer, analyze this code and provide constructive feedback on: 1) Code quality and best practices, 2) Potential improvements, 3) Security considerations, 4) Performance optimizations. Be encouraging and educational. Code: ${code}`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error reviewing code:', error);
      return 'Unable to review code at this time. Please try again later.';
    }
  }

  async predictProgress(progressInfo: string): Promise<string> {
    try {
      const prompt = `As an AI learning analyst, analyze this learning progress information and provide: 1) Current skill assessment, 2) Predicted learning trajectory, 3) Recommended next steps, 4) Potential career outcomes, 5) Motivational insights. Be encouraging and specific. Progress info: ${progressInfo}`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error predicting progress:', error);
      return 'Unable to analyze progress at this time. Keep learning and try again later!';
    }
  }

  async explainConcept(concept: string): Promise<string> {
    try {
      const prompt = `Explain this programming concept in a clear, beginner-friendly way with: 1) Simple definition, 2) Real-world analogy, 3) Code examples, 4) Common use cases, 5) Tips for mastery. Make it engaging and easy to understand. Concept: ${concept}`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error explaining concept:', error);
      return 'Unable to explain this concept right now. Please try again later.';
    }
  }
}

export const geminiService = new GeminiService();