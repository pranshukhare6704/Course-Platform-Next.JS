import Image from 'next/image'
import Link from 'next/link'
import Button  from "../components/ui/button"
import Card  from "../components/ui/card"
import Input  from "../components/ui/input"
import { Star, Search, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Access to <span className="text-green-500">5000+</span> Courses from{" "}
              <span className="text-green-500">300</span> Instructors & Institutions
            </h1>
            <p className="text-gray-600 text-lg">Start your learning journey today</p>
            <div className="relative max-w-md">
              <Input 
                placeholder="Search courses..." 
                className="pl-10 pr-4 py-3 w-full rounded-full border-gray-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          <div className=""  style={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
            <img
              src="/images/image1.png"
              alt="Featured Instructors"
            />
            <img
              src="/images/image2.png"
              alt="Featured Instructors"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Most Popular Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((course) => (
              <Card key={course} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/image3.png"
                    alt={`Course ${course}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-gray-300 fill-current" />
                    <span className="ml-2 text-sm text-gray-600">4.0</span>
                  </div>
                  <h3 className="font-semibold mb-2">Course Title Here</h3>
                  <p className="text-green-500 font-bold">$99</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Most Popular Categories</h2>
          <div className="flex flex-wrap gap-4">
            {['Design', 'Development', 'Marketing', 'Business', 'Lifestyle', 'Photography', 'Music', 'Data Science'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Best Instructor</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((instructor) => (
              <Card key={instructor} className="text-center p-4">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/images/image6.png"
                    alt={`Instructor ${instructor}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600 text-sm">Web Developer</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-4xl font-bold text-green-500">300</h3>
                <p className="text-gray-600">Expert Instructors</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-4xl font-bold text-green-500">10,000+</h3>
                <p className="text-gray-600">Active Students</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-4xl font-bold text-green-500">20,000+</h3>
                <p className="text-gray-600">Five Star Reviews</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-4xl font-bold text-green-500">100,000+</h3>
                <p className="text-gray-600">Students Worldwide</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                style={{width: 322, height: 453}}
                src="/images/image7.png"
                alt="Achievement"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Student Feedback</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((testimonial) => (
              <Card key={testimonial} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/images/image8.png"
                      alt={`Student ${testimonial}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-gray-600 text-sm">Web Design Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Join World's largest learning platform today
                </h2>
                <p className="mb-6">Start learning from the world's best instructors</p>
                <Button className="bg-white text-green-500 hover:bg-gray-100">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/images/image9.png"
                  alt="CTA"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Leading platform for online education and learning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Design</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Development</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Marketing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Business</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}