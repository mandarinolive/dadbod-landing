"use client";

import { useState, useCallback } from 'react';
import { Button, Card, CardContent, Input } from '@mui/material';
import { Dumbbell, Utensils, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        console.log('Email submitted:', email);
        setEmail(''); // Reset the input
        alert('Thank you for subscribing!');
      } else {
        console.error('Error submitting email');
      }
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  }, [email]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center bg-blue-200 fixed top-0 left-0 right-0 z-10">
        <div className="container max-w-6xl flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Dumbbell className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">dadbod.ai</span>
          </Link>
          <Button
            onClick={() => {
              const form = document.getElementById('email-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="contained"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            💪 Join waitlist
          </Button>
        </div>
      </header>
      <main className="flex-1 pt-14 md:pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-200 to-purple-200">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                  The AI Fitness Revolution for Dads
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Take control of your health with customized, AI-driven workouts and nutrition plans—created specifically for busy dads.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 py-3 px-6 text-lg font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Start Your Transformation
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800">The Dad Fitness Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Time Constraints</h3>
                  <p className="text-gray-600">
                    Juggling family life and work? Our AI adapts workouts and meals to fit your busy schedule, so you can prioritize your health without the stress.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Outdated Fitness Programs</h3>
                  <p className="text-gray-600">
                    Fitness apps don&apos;t get the demands of being a dad. Our AI designs personalized plans tailored to your specific needs as a father, focusing on sustainable results.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Lack of Sustainable Motivation</h3>
                  <p className="text-gray-600">
                    Struggling with consistency? Our AI tracks your progress and sends you timely encouragement, so you stay motivated throughout your transformation journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800">The dadbod.ai Transformation Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Dumbbell className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">AI Fitness Coach</h3>
                  <p className="text-gray-600">
                    Customized workouts that fit your schedule and push your limits.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Utensils className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Smart Nutrition Guide</h3>
                  <p className="text-gray-600">
                    AI-driven meal planning for optimal health and energy levels.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Dad Fitness Community</h3>
                  <p className="text-gray-600">
                    Connect with like-minded dads, share victories, and motivate each other.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-70">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Progress Analytics</h3>
                  <p className="text-gray-600">
                    Track your transformation journey and celebrate milestones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="email-form" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-400 to-purple-400 text-white">
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Dad Bod Transformation Movement</h2>
              <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl">
                Start your AI-powered fitness journey today and unlock the best version of yourself!
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white text-blue-600"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 py-3 px-6 text-lg font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Start Your Transformation
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-200">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">© 2024 dadbod.ai. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
