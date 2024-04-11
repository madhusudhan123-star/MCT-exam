import React from 'react';
import image from './madhu.jpg'

function About() {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      </header>
      <main className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocI0WWnqRAuGOROIvmBFkB1Y9FvNbNsrZzCqTbSG7x7fA_MNSE8=s317-c-no" // Replace with your image path
              alt="Company logo or product image"
              className="w-full md:w-3/4 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="prose lg:prose-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed diam eget risus porta condimentum. Donec at odio eu leo
              pretium fringilla. Donec ullamcorper nulla non metus auctor
              fringilla.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Integer posuere erat a ante
              blandit, a sodales ipsum viverra. Pellentesque in ipsum id orci
              porta dapibus. Praesent sapien massa, convallis a pharetra vitae,
              laoreet vel leo.
            </p>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={image} // Replace with your image path
                alt="Team member image"
                className="w-32 h-32 mx-auto object-contain rounded-full shadow-md mb-2"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">Madhusudhan</h3>
              <p className="text-gray-600">Programmer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
