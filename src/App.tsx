import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Instagram, 
  Twitter, 
  Mail, 
  ChevronRight,
  ExternalLink,
  Target,
  Zap,
  Shield
} from "lucide-react";

const Section = ({ children, id, className = "" }: { children: ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-8 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-display text-2xl font-bold tracking-tighter italic">NICO<span className="text-brand-red">HARO</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#record" className="hover:text-white transition-colors">Record</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544117518-30dd5ff7a4b0?q=80&w=1920&auto=format&fit=crop" 
            alt="MMA Training Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-4 italic tracking-tighter">
              NICO <span className="text-brand-red">HARO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium uppercase tracking-[0.3em] mb-8">
              MMA Fighter • Business Major • Professional
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Partner With Me <ChevronRight size={20} />
              </a>
              <a href="#record" className="px-6 py-3 border border-white/20 hover:bg-white/10 transition-all uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                View Record <Trophy size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 italic">The <span className="text-brand-red">Grind</span> Never Stops</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Based in Missouri, I balance the discipline of professional mixed martial arts with the strategic mindset of a business major at the University of Missouri. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Since 2020, I've maintained a professional career at QuikTrip, proving that success is built on consistency, whether it's in the cage, the classroom, or the workplace. I am currently building my brand as a fighter, seeking to bridge the gap between athletic excellence and business savvy.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Resilience</h4>
                  <p className="text-xs text-gray-500">Built in the cage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Strategy</h4>
                  <p className="text-xs text-gray-500">Mizzou Business</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/20 blur-3xl rounded-full" />
            <img 
              src="/nico.jpg" 
              alt="MMA Focus" 
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Record Section */}
      <div className="bg-brand-gray py-20" id="record">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold italic mb-4">Fight <span className="text-brand-red">Record</span></h2>
            <div className="inline-flex items-center gap-4 text-2xl font-display">
              <span className="text-white">1 WIN</span>
              <span className="text-gray-600">—</span>
              <span className="text-brand-red">1 LOSS</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center">
              <Zap className="text-brand-red mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Aggressive Style</h3>
              <p className="text-gray-400 text-sm">Known for high-pressure striking and relentless forward movement.</p>
            </Card>
            <Card className="flex flex-col items-center text-center border-brand-red/30">
              <Trophy className="text-brand-red mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Recent Victory</h3>
              <p className="text-gray-400 text-sm">Dominant performance showcasing evolved grappling and fight IQ.</p>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <Target className="text-brand-red mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Next Camp</h3>
              <p className="text-gray-400 text-sm">Currently training for the next challenge. Stay tuned for fight news.</p>
            </Card>
          </div>
        </Section>
      </div>

      {/* Experience & Education */}
      <Section id="experience">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-brand-red" size={32} />
              <h2 className="text-3xl font-bold italic">Professional Experience</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-brand-red pl-6 relative">
                <div className="absolute w-3 h-3 bg-brand-red rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-bold">QuikTrip</h3>
                <p className="text-brand-red font-medium mb-2">2020 — Present</p>
                <p className="text-gray-400">
                  Maintaining high-level operational standards and customer service in a fast-paced environment. Developing leadership and management skills while balancing athletic and academic commitments.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-brand-red" size={32} />
              <h2 className="text-3xl font-bold italic">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-white/20 pl-6 relative">
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-bold">University of Missouri</h3>
                <p className="text-brand-red font-medium mb-2">Business Major</p>
                <p className="text-gray-400">
                  Focusing on business strategy, marketing, and brand management. Applying classroom concepts to build the "Nico Haro" fighter brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA / Contact */}
      <div className="bg-gradient-to-t from-brand-red/20 to-transparent">
        <Section id="contact">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} />
            </div>
            
            <h2 className="text-5xl font-bold italic mb-6">Join The <span className="text-brand-red">Journey</span></h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              I am actively looking for sponsors, training partners, and brand collaborations. Let's build something legendary together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:contact@nicoharo.com" className="btn-primary">
                <Mail size={20} /> Email Me
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm uppercase tracking-widest">
        <p>© {new Date().getFullYear()} NICO HARO • ALL RIGHTS RESERVED</p>
        <p className="mt-2 text-[10px]">Mizzou Business • MMA Fighter • Professional</p>
      </footer>
    </div>
  );
}
