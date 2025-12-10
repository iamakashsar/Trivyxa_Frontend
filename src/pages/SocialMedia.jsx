import { Link } from 'react-router-dom';
import { 
    HeartIcon, // For Likes
    ChatBubbleOvalLeftEllipsisIcon, // For Comments
    ArrowTopRightOnSquareIcon // For external link
} from '@heroicons/react/24/outline';

// MOCK DATA: In a real application, this data would be fetched from your
// server-side API which securely pulls content from X, Instagram, LinkedIn, etc.
const socialPosts = [
    
    {
        id: 2,
        platform: 'Instagram',
        handle: '@trivyxa_official',
        text: 'Behind the scenes of our latest design sprint! 🚀 Focusing on accessibility and speed for all our users. What features are you hoping to see next? #UIUX #DesignThinking',
        timestamp: '1 day ago',
        likes: 450,
        comments: 55,
        url: 'https://instagram.com/trivyxa_tech',
        iconColor: 'text-pink-600',
        iconPath: 'M18.8 1.5h-13c-2 0-3.5 1.5-3.5 3.5v13c0 2 1.5 3.5 3.5 3.5h13c2 0 3.5-1.5 3.5-3.5v-13c0-2-1.5-3.5-3.5-3.5zm-6.5 15.5c-3.1 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm4.8-9.8c0 .6-.5 1-1 1s-1-.4-1-1 .5-1 1-1 1 .4 1 1z',
    },
    {
        id: 3,
        platform: 'LinkedIn',
        handle: '/company/trivyxa',
        text: 'Great session today with the team on continuous integration and delivery. Investing in better deployment pipelines means faster value for our clients. #CI/CD #DevOps #TechInnovation',
        timestamp: '3 days ago',
        likes: 98,
        comments: 15,
        url: 'https://linkedin.com/company/trivyxa',
        iconColor: 'text-blue-700',
        iconPath: 'M20.5 22h-4v-6.2c0-1.5-.7-2.3-1.8-2.3-1.5 0-2.3 1.2-2.3 2.3v6.2h-4V10h4v2.5c.7-1.2 2.1-2 3.5-2 3.5 0 5 2.3 5 7.5V22zM3.5 8C2.1 8 1 6.9 1 5.5S2.1 3 3.5 3 6 4.1 6 5.5 4.9 8 3.5 8zM5.5 10H1V22h4.5V10z',
    },
];

// Helper component for SVG social icons
const PlatformIcon = ({ path, color }) => (
    <div className={`w-6 h-6 ${color}`}>
        <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full fill-current" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={path} />
        </svg>
    </div>
);

// Main Page Component
export default function SocialMediaPage() {

    // Helper to format large numbers (e.g., 1240 -> 1.2k)
    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    };

    return (
        <div className="min-h-screen pt-12 bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
            <div className="mx-auto max-w-xl px-4 py-8">
                
                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                        Trivyxa Social Feed
                    </h1>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mt-2 font-medium">
                        Live Updates & Community Posts
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-md mx-auto">
                        See what's happening right now across our official channels.
                    </p>
                </header>
                
                {/* Social Posts Feed */}
                <div className="space-y-6">
                    {socialPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 transition duration-300 hover:shadow-xl"
                        >
                            {/* Post Header */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <PlatformIcon path={post.iconPath} color={post.iconColor} />
                                    <div>
                                        <p className="text-base font-semibold dark:text-white">{post.platform}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {post.handle} &bull; {post.timestamp}
                                        </p>
                                    </div>
                                </div>
                                {/* Link to original post */}
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors"
                                    aria-label={`View original post on ${post.platform}`}
                                >
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Post Content */}
                            <p className="text-slate-700 dark:text-slate-300 text-base mb-4 whitespace-pre-wrap">
                                {post.text.split('\n').map((line, index) => (
                                    <span key={index} className="block mb-1">{line}</span>
                                ))}
                            </p>

                            {/* Post Footer - Stats */}
                            <div className="flex items-center justify-start space-x-6 text-slate-500 dark:text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <HeartIcon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{formatNumber(post.likes)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{formatNumber(post.comments)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-10 text-center">
                    <Link 
                        to="/"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                    >
                        &larr; Back to Main Site
                    </Link>
                </div>
            </div>
        </div>
    );
}
