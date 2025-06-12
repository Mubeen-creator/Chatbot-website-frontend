import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { 
  MessageCircle, 
  Zap, 
  Clock, 
  Users, 
  BarChart3, 
  Shield,
  ArrowRight,
  Check,
  Brain,
  Lightbulb
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Conversations",
      description: "Engage in natural, context-aware conversations on any topic with advanced AI."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Assistant",
      description: "Get help with writing, brainstorming, problem-solving, and creative projects."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Your AI companion is always ready to chat, learn, and help whenever you need."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-topic Expertise",
      description: "From science and technology to arts and culture - discuss anything that interests you."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Continuous learning capabilities that adapt to your conversation style and preferences."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Private",
      description: "Your conversations are secure with privacy-focused AI that respects your data."
    }
  ];

  const useCases = [
    {
      title: "Students & Learners",
      description: "Get explanations, study help, and educational support across all subjects.",
      features: ["Homework assistance", "Concept explanations", "Study planning", "Research help"]
    },
    {
      title: "Professionals",
      description: "Boost productivity with AI assistance for work-related tasks and decisions.",
      features: ["Email drafting", "Meeting summaries", "Project planning", "Data analysis"]
    },
    {
      title: "Creatives",
      description: "Unleash your creativity with AI-powered brainstorming and content generation.",
      features: ["Story writing", "Idea generation", "Content creation", "Art concepts"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Personal
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Companion</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chat about anything, learn something new, get creative help, or just have a friendly conversation. 
              Our AI is here to assist, inspire, and engage with you on any topic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                <Link href="/trychatbot">
                  Start Chatting <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of AI conversation with features designed to make every interaction meaningful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're learning, working, or creating, our AI assistant adapts to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{useCase.title}</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Try It Right Now
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of AI conversation. Ask questions, get creative, or just chat about your day.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Try asking:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "Explain quantum physics in simple terms"</li>
                  <li>• "Help me write a creative story"</li>
                  <li>• "What are some healthy dinner ideas?"</li>
                  <li>• "How do I learn a new programming language?"</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Or discuss:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Current events and news</li>
                  <li>• Science and technology</li>
                  <li>• Arts, culture, and entertainment</li>
                  <li>• Personal goals and planning</li>
                </ul>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
            <Link href="/trychatbot">
              Start Your Conversation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Chatting?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users already exploring the possibilities with our AI assistant.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
            <Link href="/trychatbot">
              Try It Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}