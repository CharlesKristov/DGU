
export default function Spareparts() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <div className="text-center space-y-6 max-w-2xl">
                <h1 className="text-4xl max-md:text-3xl font-bold text-primary-blue mb-4">🚧 Work In Progress 🚧</h1>
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 border-8 border-gray-600 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-1.5 border-t-[10px] border-primary-blue rounded-full animate-spin"></div>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                    We're working hard to bring you something amazing. Please check back soon!
                </p>
            </div>
        </div>
    )
}