import ChatInterface from '@/components/chat-interface';

export default function TryChatbotPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Chat with AI Assistant</h1>
          <p className="text-blue-100">Ask me anything! I can help with questions, creative projects, learning, and more.</p>
        </div>
      </div>

      {/* Chat Interface Container */}
      <div className="flex-1 max-w-4xl mx-auto w-full border-x bg-white">
        <ChatInterface />
      </div>
    </div>
  );
}