export default function About() {
    const hasImage = true; // Set to `false` if the image is not present

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="flex flex-col items-center gap-6 lg:gap-12">
                    {hasImage && (
                        <div className="flex-shrink-0 w-full md:w-5/12 lg:w-5/12 mb-6">
                            <img
                                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                alt="Illustration of a startup concept"
                                className="w-full h-auto"
                            />
                        </div>
                    )}
                    <div className="flex-1 w-full md:w-7/12 lg:w-6/12">
                        <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to NS Technology
                        </h1>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            At NS Technology, we are dedicated to revolutionizing the way local businesses connect with their communities. We understand the heartbeat of every local shop, and our mission is to empower them with the tools they need to thrive in the digital age.
                        </p>

                        <h2 className="text-xl font-bold my-4 text-gray-800">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Born out of a passion for supporting local economies, NS Technology was founded to bridge the gap between traditional brick-and-mortar stores and the vast online marketplace. We believe that every local shop is unique, and their stories deserve to be told on a digital canvas.
                        </p>

                        <h2 className="text-xl font-bold my-4 text-gray-800">What We Do</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We provide a cutting-edge platform that allows local businesses to establish a robust online presence, reach a broader audience, and seamlessly transition into the world of e-commerce. Our user-friendly interface empowers shop owners to showcase their products and services, interact with customers, and grow their businesses beyond physical boundaries.
                        </p>

                        <h2 className="text-xl font-bold my-4 text-gray-800">Why Choose NS Technology</h2>
                        <ul className="list-disc list-inside my-4 text-gray-600 leading-relaxed">
                            <li><strong>Community-Centric Approach:</strong> We prioritize community building, fostering connections between local businesses and their customers. Your success is our success, and we're here to support you every step of the way.</li>
                            <li><strong>User-Friendly Technology:</strong> Our platform is designed with simplicity in mind. Even if you're new to the digital landscape, you'll find our tools intuitive and easy to navigate.</li>
                            <li><strong>Tailored Solutions:</strong> We understand that each local shop has its own identity. Our customizable features ensure that your digital presence reflects the uniqueness of your business.</li>
                        </ul>

                        <h2 className="text-xl font-bold my-4 text-gray-800">Join Us in Digitizing Local Businesses</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Embark on a journey of growth and discovery with NS Technology. Let's bring your local shop into the digital era, creating a vibrant online community where local businesses thrive. Together, we can build a stronger, more connected future for your shop and the community it serves.
                        </p>

                        <div className="mt-8">
                            <a href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded">
                                Get in Touch
                            </a>
                        </div>

                        <p className="mt-8 text-gray-600 leading-relaxed">
                            Thank you for choosing NS Technology – where local businesses find their digital home.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
