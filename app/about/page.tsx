import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  ArrowRight,
  MessageCircle,
  Building,
  Globe,
  Brain,
  Zap,
  Shield
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "1M+", label: "Conversations", icon: <MessageCircle className="w-6 h-6" /> },
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Availability", icon: <Globe className="w-6 h-6" /> }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "AI Research Lead",
      description: "PhD in Machine Learning from MIT, specializing in natural language processing and conversational AI systems.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Sarah Johnson", 
      role: "Product Director",
      description: "Former Google AI researcher with 10+ years in developing user-friendly AI applications and interfaces.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Manager",
      description: "Full-stack engineer passionate about building scalable AI systems that enhance human creativity and learning.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Emily Zhang",
      role: "UX Design Lead",
      description: "Design expert focused on creating intuitive interfaces that make AI accessible and enjoyable for everyone.",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence",
      description: "We believe AI should augment human intelligence, not replace it. Our goal is to make you smarter and more creative."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accessibility",
      description: "AI should be available to everyone. We're committed to making advanced AI conversation accessible to all users."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Curiosity",
      description: "We encourage exploration and learning. Every conversation is an opportunity to discover something new."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy",
      description: "Your conversations are private and secure. We prioritize user privacy and data protection above all."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're building the future of human-AI interaction through natural, intelligent conversations that inspire, educate, and empower users worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              We believe that AI should be a companion in your journey of learning, creating, and growing. 
              Our AI assistant isn't just a tool—it's a conversational partner designed to understand, 
              engage, and inspire meaningful interactions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2023 by a team of AI researchers and product designers, we set out to create 
              an AI that could discuss any topic with depth, creativity, and genuine helpfulness. 
              Whether you're a student seeking explanations, a professional looking for insights, 
              or someone who simply enjoys thoughtful conversation, our AI is here for you.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Today, our AI assistant engages in over a million conversations monthly, helping users 
              explore ideas, solve problems, learn new concepts, and unleash their creativity. 
              From homework help to creative writing, from technical discussions to casual chats, 
              we're proud to be part of our users' daily lives.
            </p>
            <p className="text-lg leading-relaxed">
              We're just getting started. Our vision is to create AI that truly understands and 
              enhances human potential, making knowledge and creativity accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide how we develop AI and shape every interaction you have with our assistant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate minds behind your AI assistant, dedicated to advancing human-AI collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Exploring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of AI conversation. Ask questions, get creative, and discover what's possible.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
            <Link href="/trychatbot">
              Try Our AI Assistant <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}