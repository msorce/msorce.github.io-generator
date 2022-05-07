/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import YoutubeVideo from "../Youtube/YoutubeVideo"
import YoutubePlaylist from "../Youtube/YoutubePlaylist"

const callouts = [
    {
        name: 'Algorithms/Live Coding',
        description: 'I love giving back to the community through live coding and algorithm tutorials.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
        id: "Flkbmf6-DmU",
        type: "video"
    },
    {
        name: 'Gaming',
        description: 'I went to school to develop games, and still love getting some gaming in.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
        id: "4JwgXtLwMoE",
        type: "video"
    },
    {
        name: 'Guitar',
        description: "I've been playing guitar for a while, I'm currently learning some new Polyphia riffs",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        id: "pFakhEbSzG4",
        type: "video"
    },
]

const VideoSection: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-2xl font-extrabold text-gray-800">I Make Videos on <a href="" className="underline text-red-600 hover:text-red-800 visited:text-red-600">YouTube</a> & Stream on <a href="" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Twitch</a></h2>

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    {/* <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    /> */}
                                    {
                                        callout.type === "video" ? <YoutubeVideo id={callout.id} /> :
                                            <YoutubePlaylist id={callout.id} />
                                    }

                                </div>
                                <h3 className="mt-6 text-md text-gray-500">
                                    {/* <a href={callout.href}> */}
                                    {/* <span className="absolute inset-0" /> */}
                                    {callout.name}
                                    {/* </a> */}
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoSection;
