
interface BlogFooterProps {
    date: string;
    author: {
      name: string;
      image: string;
      bio: string;
    };
    prevPost: {
        title: string;
        hash: string;
    }
    nextPost: {
        title: string;
        hash: string;
    }
  }

const BlogFooter = (props: BlogFooterProps) => {



    return (
        <footer className="mt-12 border-t border-gray-200 pt-6 mb-12 border-b-2 border-gray-800 pb-12">
          {/* Post Metadata */}
          {/* Author Info */}
          {props.author && (
            <div className="mt-6 flex items-center gap-4">
              <img src={props.author.image} alt={props.author.name} className="w-12 h-12 rounded-full self-start mx-2" />
              <div>
                <p className="font-semibold">{props.author.name}</p>
                <p className="text-gray-500  font-Outfit">{props.author.bio}</p>
              </div>
            </div>
          )}
        </footer>
      );
}

export default BlogFooter;