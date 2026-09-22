
import Image from "next/image";
import HeroImage from "@/assets/hero.png";
import HeroBanner from "./Banner";

export default function HeroSection() {
	return (
		<>
			<section className="container mx-auto px-4 pt-16 md:pt-24">
				<div className="flex flex-col items-center text-center gap-8">

					{/* Text Content */}
					<div className="max-w-2xl space-y-5">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base-content">
							We Build{" "}
							<br className="hidden md:block" />

							<span className="text-primary">
								Productive Apps
							</span>
						</h2>

						<p className="text-base md:text-lg text-base-content/70 leading-relaxed">
							At{" "}
							<span className="font-semibold text-base-content">
								HERO.IO
							</span>
							, we craft innovative apps designed to make everyday
							life simpler, smarter, and more exciting. Our goal
							is to turn your ideas into digital experiences that
							truly make an impact.
						</p>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="btn btn-neutral btn-lg gap-2 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-5 h-5 fill-current"
							>
								<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.4c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
							</svg>

							PlayStore
						</button>

						<button className="btn btn-outline btn-lg gap-2 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								className="w-5 h-5 fill-current"
							>
								<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37 59 127.6 107.2 126.1 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-83.5 102.6-120.6-65.2-30.7-61.7-90-61.7-91.5zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
							</svg>

							AppStore
						</button>
					</div>

					{/* Hero Image */}
					<div className="mt-6 w-full max-w-2xl">
						<Image
							src={HeroImage}
							width={300}
							height={400}
							alt="hero image"
							className="block w-full h-auto object-contain drop-shadow-xl"
							priority
						/>
					</div>
				</div>
			</section>

			<HeroBanner />
		</>
	);
}
