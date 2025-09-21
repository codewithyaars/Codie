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
      const prompt = `You are a programming tutor specializing in HTML, CSS, and JavaScript. Answer this question professionally and helpfully: ${message}`;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating chat response:', error);
      return 'Sorry, I encountered an error. Please try asking your question again.';
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
}

export const geminiService = new GeminiService();