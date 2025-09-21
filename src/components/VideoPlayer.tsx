import React, { useState, useEffect } from 'react';
import { geminiService } from '../utils/geminiApi';
import { Loader, CheckCircle } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  lessonTitle: string;
  lessonContent: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoUrl, 
  lessonTitle, 
  lessonContent, 
  onComplete,
  isCompleted 
}) => {
  const [aiSummary, setAiSummary] = useState<string>('');
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    if (lessonContent) {
      setLoadingSummary(true);
      geminiService.generateSummary(lessonContent)
        .then(setAiSummary)
        .finally(() => setLoadingSummary(false));
    }
  }, [lessonContent]);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = videoUrl ? getYouTubeId(videoUrl) : null;

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{lessonTitle}</h2>
        <button
          onClick={onComplete}
          disabled={isCompleted}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            isCompleted
              ? 'bg-green-500 text-white cursor-default'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
          }`}
        >
          {isCompleted ? (
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Completed
            </div>
          ) : (
            'Mark as Complete'
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {videoId ? (
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={lessonTitle}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">No video available</p>
            </div>
          )}
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-3">AI Summary</h3>
          {loadingSummary ? (
            <div className="flex items-center text-gray-400">
              <Loader className="h-4 w-4 mr-2 animate-spin" />
              Generating summary...
            </div>
          ) : (
            <div className="text-gray-300 text-sm space-y-2">
              {aiSummary.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white mb-3">Lesson Content</h3>
        <div className="text-gray-300 space-y-2">
          {lessonContent.split('.').map((sentence, index) => (
            sentence.trim() && (
              <p key={index} className="text-sm">• {sentence.trim()}.</p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};