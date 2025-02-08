import { ArrowRight, Chip, Trophy, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { useRandomColor } from '../hooks/useRandomColor';
import { useState, useEffect } from 'react';

const colors = [
  'from-purple-600 to-blue-500',
  'from-blue-500 to-teal-400',
  'from-teal-400 to-green-500',
  'from-green-500 to-yellow-400',
  'from-red-500 to-pink-500',
  'from-pink-500 to-purple-500',
];

export default function Home() {
  const animatedText = useTypewriter([
    'AI Engineer',
    'Machine Learning Expert',
    'Full Stack Developer',
    'Computer Vision Specialist',
    'Problem Solver'
  ]);
  const gradientColor = useRandomColor();
  const [borderColorIndex, setBorderColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBorderColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(intervalId);
  }, []);

  const currentBorderColor = colors[borderColorIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 transition-colors duration-500 ease-in-out relative">
      <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8 transition-opacity duration-500 ease-in-out mx-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-500 ease-in-out">
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-mono">
                Hi, I'm{' '}
                <span className={`bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent transition-colors duration-1000 font-mono`}>
                  Nenavath Suresh
                </span>
              </h2>
              <div className="h-8">
                <p className="text-xl text-gray-600 font-mono">
                  <span className="text-purple-600">{animatedText}</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed font-mono">
              A passionate technologist pursuing B.Tech in CSE (Data Science) at Siddhartha Institute of Engineering and Technology. 
              I specialize in AI/ML, computer vision, and full-stack development, with expertise in Python, React.js, and Node.js. 
              My goal is to enhance my skills while contributing to organizational growth through innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 transition-opacity duration-500 ease-in-out">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-mono"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200 font-mono"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          {/* Responsive Image Container */}
          <div className="relative transition-opacity duration-500 ease-in-out lg:justify-center lg:items-center">
            <div className={`relative rounded-full overflow-hidden shadow-2xl border-4 bg-gradient-to-r ${currentBorderColor} transition-colors duration-1000 w-64 h-64 sm:w-72 sm:h-72 lg:w-64 lg:h-64`}>
              <img
                src="https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg"
                alt="Nenavath Suresh"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-full"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>

        {/* Education & Skills Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 transition-opacity duration-500 ease-in-out">
          {/* Education */}
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 font-mono">
              Education <GraduationCap className="inline ml-2 w-6 h-6"/>
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Bachelor of Technology - CSE (Data Science)</h4>
                <p className="text-gray-600 font-mono">Siddhartha Institute of Engineering and Technology, Hyderabad</p>
                <p className="text-sm text-gray-500 font-mono">2021-2025 • CGPA: 7.23</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Intermediate - MPC</h4>
                <p className="text-gray-600 font-mono">Telangana Social Welfare Educational Institutions Society, Sanga Reddy</p>
                <p className="text-sm text-gray-500 font-mono">2019-2021 • Percentage: 93.4%</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Secondary School Certificate</h4>
                <p className="text-gray-600 font-mono">Zilla Parishad High School, Sanga Reddy</p>
                <p className="text-sm text-gray-500 font-mono">2009-2019 • CGPA: 8.8</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 font-mono">
              Technical Skills <Chip className="inline ml-2 w-6 h-6"/>
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Frontend Development</h4>
                <p className="text-gray-600 font-mono">HTML, CSS, Bootstrap, JavaScript, React.js</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Backend Development</h4>
                <p className="text-gray-600 font-mono">Node.js, Express.js, SQL</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">Programming Languages</h4>
                <p className="text-gray-600 font-mono">Python, Java, C</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 font-mono">
                  Certifications <Trophy className="inline ml-2 w-6 h-6"/>
                </h4>
                <ul className="text-gray-600 list-disc list-inside space-y-2 font-mono">
                  <li>Google Cloud Generative AI Virtual Internship</li>
                  <li>Elite Silver certification in 'Introduction to Internet of Things' from NPTEL, IIT Kharagpur (85% score)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-24 transition-opacity duration-500 ease-in-out">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-mono">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 transition-opacity duration-500 ease-in-out relative">
              <h4 className="text-xl font-semibold text-gray-900 font-mono">Automated Road Damage Detection</h4>
              <p className="text-gray-600 font-mono">
                Built a Python application for detecting road damage using UAV images and deep learning models
                (YOLOv5, YOLOv7, YOLOv8). Features include dataset preprocessing, bounding box normalization,
                and accuracy evaluation.
              </p>
              <div className="text-sm text-gray-500 font-mono">
                Technologies: Python 3.7.0, TensorFlow, Keras, OpenCV, YOLO
              </div>
              <img src="https://source.unsplash.com/random/600x400/?road,damage" alt="Road Damage Detection" className="w-full h-auto mt-4 rounded-lg shadow-md"/>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 transition-opacity duration-500 ease-in-out relative">
              <h4 className="text-xl font-semibold text-gray-900 font-mono">Food Munch</h4>
              <p className="text-gray-600 font-mono">
                A responsive food delivery website with seamless user experience. Features product videos
                and an intuitive interface for exploring food items.
              </p>
              <div className="text-sm text-gray-500 font-mono">
                Technologies: HTML, CSS, Bootstrap
              </div>
              <a 
                href="https://foodmunchapp3.ccbp.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 inline-flex items-center font-mono"
              >
                View Project <ArrowRight className="ml-1 w-4 h-4" />
              </a>
              <img src="https://source.unsplash.com/random/600x400/?food,delivery" alt="Food Munch" className="w-full h-auto mt-4 rounded-lg shadow-md"/>
            </div>
          </div>
        </div>
      </div>
      {/* Cursor Animation */}
      <div className="cursor-animation absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="cursor-dot absolute rounded-full bg-purple-600"></div>
        <div className="cursor-outline absolute rounded-full bg-purple-600/20"></div>
      </div>
    </div>
  );
}
