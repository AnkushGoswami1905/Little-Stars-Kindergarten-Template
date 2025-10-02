import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Star, 
  Users, 
  Heart, 
  BookOpen, 
  Palette, 
  Music, 
  TreePine, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Award,
  Smile,
  Camera,
  Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'facilities', 'gallery', 'faculty', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-[#F15B42]" />
              <span className="ml-2 text-2xl font-bold text-[#2C3D73] font-fredoka">
                Little Stars
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'programs', 'facilities', 'gallery', 'faculty', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium font-poppins capitalize transition-colors duration-300 ${
                      activeSection === item
                        ? 'text-[#F15B42] bg-[#FFD372]/20'
                        : 'text-[#2C3D73] hover:text-[#F15B42]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#2C3D73] hover:text-[#F15B42] transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['home', 'about', 'programs', 'facilities', 'gallery', 'faculty', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-[#2C3D73] hover:text-[#F15B42] font-medium font-poppins capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-[#7CAADC]/20 to-[#F49CC4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD372] rounded-full mb-6">
                <Star className="h-10 w-10 text-[#2C3D73]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C3D73] font-fredoka mb-6">
                Where Learning
                <span className="text-[#F15B42]"> Begins</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-poppins mb-8 max-w-3xl mx-auto">
                Nurturing young minds in a safe, loving environment where every child can shine like a star
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#F15B42] text-white px-8 py-4 rounded-full font-semibold font-poppins text-lg hover:bg-[#F15B42]/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enroll Today
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-[#2C3D73] px-8 py-4 rounded-full font-semibold font-poppins text-lg border-2 border-[#2C3D73] hover:bg-[#2C3D73] hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Users, title: "50+ Happy Families", color: "#F15B42" },
                { icon: Award, title: "Certified Teachers", color: "#FFD372" },
                { icon: Heart, title: "Safe Environment", color: "#F49CC4" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <item.icon className="h-8 w-8 mx-auto mb-3" style={{ color: item.color }} />
                  <h3 className="text-lg font-semibold text-[#2C3D73] font-fredoka">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              About Little Stars
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              For over 10 years, we've been creating magical learning experiences for children aged 3-6
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#7CAADC]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2C3D73] font-fredoka mb-4">Our Mission</h3>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  To provide a nurturing, stimulating environment where every child can develop their unique talents, 
                  build confidence, and create lasting friendships while preparing for their academic journey ahead.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "Small Classes", desc: "Max 12 students" },
                  { icon: Clock, title: "Flexible Hours", desc: "7 AM - 6 PM" },
                  { icon: Heart, title: "Caring Staff", desc: "Experienced teachers" },
                  { icon: Smile, title: "Happy Kids", desc: "Joyful learning" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <item.icon className="h-8 w-8 text-[#F15B42] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#2C3D73] font-fredoka">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-poppins">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFD372] to-[#F49CC4] rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Happy children learning" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-white font-fredoka mb-2">Why Choose Us?</h3>
                <ul className="text-white font-poppins space-y-2">
                  <li>✨ Individualized learning approach</li>
                  <li>🎨 Creative arts & music programs</li>
                  <li>🏃‍♂️ Daily outdoor activities</li>
                  <li>📚 Early literacy development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-r from-[#F49CC4]/10 to-[#7CAADC]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Carefully designed programs that grow with your child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Little Sprouts",
                age: "Ages 3-4",
                icon: BookOpen,
                color: "#FFD372",
                features: ["Social skills development", "Basic letter recognition", "Creative play", "Potty training support"]
              },
              {
                title: "Growing Stars", 
                age: "Ages 4-5",
                icon: Star,
                color: "#F49CC4",
                features: ["Pre-reading skills", "Number concepts", "Science exploration", "Art & music"]
              },
              {
                title: "Ready to Shine",
                age: "Ages 5-6", 
                icon: Award,
                color: "#7CAADC",
                features: ["Kindergarten prep", "Writing practice", "Problem solving", "Leadership skills"]
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: program.color + '40' }}>
                  <program.icon className="h-8 w-8" style={{ color: program.color }} />
                </div>
                <h3 className="text-2xl font-bold text-[#2C3D73] font-fredoka mb-2 text-center">
                  {program.title}
                </h3>
                <p className="text-[#F15B42] font-semibold font-poppins text-center mb-6">{program.age}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-poppins">
                      <div className="w-2 h-2 bg-[#F15B42] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-[#F15B42] text-white py-3 rounded-full font-semibold font-poppins hover:bg-[#F15B42]/90 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              Amazing Facilities
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Every space is designed with your child's safety, comfort, and learning in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Palette, title: "Art Studio", desc: "Creative expression space" },
              { icon: Music, title: "Music Room", desc: "Instruments & singing" },
              { icon: TreePine, title: "Outdoor Playground", desc: "Safe climbing & slides" },
              { icon: BookOpen, title: "Library Corner", desc: "Cozy reading nook" },
              { icon: Camera, title: "Science Lab", desc: "Hands-on experiments" },
              { icon: Play, title: "Indoor Gym", desc: "Physical activities" },
              { icon: Users, title: "Quiet Room", desc: "Rest & relaxation" },
              { icon: Heart, title: "Nurse Station", desc: "Health & first aid" }
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-14 h-14 bg-[#FFD372]/20 rounded-full mb-4 mx-auto group-hover:bg-[#FFD372]/40 transition-colors">
                  <facility.icon className="h-7 w-7 text-[#F15B42]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3D73] font-fredoka mb-2">{facility.title}</h3>
                <p className="text-gray-600 font-poppins text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#7CAADC] to-[#F49CC4] rounded-3xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold font-fredoka mb-4">Take a Virtual Tour!</h3>
            <p className="text-xl font-poppins mb-6 opacity-90">
              See our beautiful facilities and meet our amazing teachers
            </p>
            <button className="bg-white text-[#2C3D73] px-8 py-3 rounded-full font-semibold font-poppins hover:bg-gray-100 transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#FFD372]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              Our Gallery
            </h2>
            <p className="text-xl text-[#2C3D73] font-poppins max-w-3xl mx-auto">
              Take a peek into our daily adventures and see the joy of learning in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Children learning and playing" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[
                  { src: "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Art activities" },
                  { src: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Outdoor play" },
                  { src: "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Learning time" },
                  { src: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Music class" },
                  { src: "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Story time" },
                  { src: "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=300", alt: "Science fun" }
                ].map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#F15B42]/0 group-hover:bg-[#F15B42]/20 rounded-lg transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-[#7CAADC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-fredoka mb-4">
              Meet Our Teachers
            </h2>
            <p className="text-xl text-white/90 font-poppins max-w-3xl mx-auto">
              Our passionate educators are dedicated to nurturing every child's unique potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                name: "Ms. Sarah Johnson",
                role: "Lead Teacher & Director",
                experience: "12 years experience",
                specialty: "Early Childhood Development",
                quote: "Every child is a different kind of flower, and together they make this world a beautiful garden.",
                image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Ms. Emily Rodriguez", 
                role: "Creative Arts Teacher",
                experience: "8 years experience",
                specialty: "Art & Music Education",
                quote: "Creativity is intelligence having fun, and every child is naturally creative.",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Ms. Lisa Chen",
                role: "STEM Coordinator", 
                experience: "10 years experience",
                specialty: "Science & Mathematics",
                quote: "Wonder is the beginning of wisdom, and children are natural scientists.",
                image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Ms. Amanda Davis",
                role: "Physical Education Teacher",
                experience: "6 years experience", 
                specialty: "Movement & Wellness",
                quote: "A healthy body leads to a healthy mind, and play is a child's work.",
                image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
            ].map((teacher, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-[#FFD372]"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#F15B42] text-white px-3 py-1 rounded-full text-xs font-semibold font-poppins">
                    {teacher.experience}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#2C3D73] font-fredoka mb-1">{teacher.name}</h3>
                  <p className="text-[#F15B42] font-semibold font-poppins mb-2">{teacher.role}</p>
                  <p className="text-sm text-gray-600 font-poppins mb-4">{teacher.specialty}</p>
                  <blockquote className="text-sm text-gray-700 font-poppins italic">
                    "{teacher.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#2C3D73] font-fredoka mb-4">Join Our Team!</h3>
              <p className="text-gray-700 font-poppins mb-6">
                Are you passionate about early childhood education? We're always looking for dedicated teachers to join our Little Stars family.
              </p>
              <button className="bg-[#F15B42] text-white px-8 py-3 rounded-full font-semibold font-poppins hover:bg-[#F15B42]/90 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F49CC4]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Don't just take our word for it - hear from our amazing families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Parent of Emma (5 years)",
                text: "Little Stars has been incredible for Emma's development. She went from shy to confident and excited about learning!",
                rating: 5
              },
              {
                name: "Michael Chen", 
                role: "Parent of Lucas (4 years)",
                text: "The teachers are so caring and professional. Lucas loves going to school every day and has made wonderful friends.",
                rating: 5
              },
              {
                name: "Lisa Rodriguez",
                role: "Parent of Sofia (3 years)", 
                text: "As a working parent, I appreciate the flexible hours and constant communication about Sofia's progress.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFD372] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-poppins mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7CAADC] rounded-full flex items-center justify-center text-white font-bold font-poppins mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3D73] font-fredoka">{testimonial.name}</h4>
                    <p className="text-gray-600 font-poppins text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3D73] font-fredoka mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Ready to give your child the best start? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#FFD372] to-[#F49CC4] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold font-fredoka mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <span className="font-poppins">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                    <span className="font-poppins">info@littlestars.edu</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <span className="font-poppins">123 Learning Lane, Sunshine City, SC 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 mr-4" />
                    <span className="font-poppins">Mon-Fri: 7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#7CAADC]/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#2C3D73] font-fredoka mb-4">Now Enrolling!</h3>
                <p className="text-gray-700 font-poppins mb-4">
                  Spaces are limited for the upcoming school year. Schedule your visit today!
                </p>
                <button className="bg-[#F15B42] text-white px-6 py-3 rounded-full font-semibold font-poppins hover:bg-[#F15B42]/90 transition-colors">
                  Schedule Tour
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2C3D73] font-fredoka mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                      Parent Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15B42]/20 focus:border-[#F15B42] outline-none font-poppins"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                      Child's Age *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15B42]/20 focus:border-[#F15B42] outline-none font-poppins">
                      <option>Select age</option>
                      <option>3 years old</option>
                      <option>4 years old</option>
                      <option>5 years old</option>
                      <option>6 years old</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15B42]/20 focus:border-[#F15B42] outline-none font-poppins"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15B42]/20 focus:border-[#F15B42] outline-none font-poppins"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15B42]/20 focus:border-[#F15B42] outline-none font-poppins"
                    placeholder="Tell us about your child and any questions you have..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#F15B42] text-white py-4 rounded-lg font-semibold font-poppins hover:bg-[#F15B42]/90 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3D73] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-[#FFD372]" />
                <span className="ml-2 text-2xl font-bold font-fredoka">Little Stars</span>
              </div>
              <p className="font-poppins text-gray-300">
                Where every child shines bright and learning never stops.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold font-fredoka mb-4">Quick Links</h3>
              <ul className="space-y-2 font-poppins text-gray-300">
                <li><a href="#about" className="hover:text-[#FFD372] transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-[#FFD372] transition-colors">Programs</a></li>
                <li><a href="#facilities" className="hover:text-[#FFD372] transition-colors">Facilities</a></li>
                <li><a href="#contact" className="hover:text-[#FFD372] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold font-fredoka mb-4">Programs</h3>
              <ul className="space-y-2 font-poppins text-gray-300">
                <li>Little Sprouts (3-4 years)</li>
                <li>Growing Stars (4-5 years)</li>
                <li>Ready to Shine (5-6 years)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold font-fredoka mb-4">Contact Info</h3>
              <div className="space-y-2 font-poppins text-gray-300">
                <p>(555) 123-4567</p>
                <p>info@littlestars.edu</p>
                <p>123 Learning Lane<br />Sunshine City, SC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center font-poppins text-gray-300">
            <p>&copy; 2025 Little Stars Kindergarten. All rights reserved. Made with ❤️ for little learners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;