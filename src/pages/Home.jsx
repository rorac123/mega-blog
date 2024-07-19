import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { PostCard } from '../components'
import parse from "html-react-parser";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const authStatus = useSelector((state) => state.auth.status)

    if (!authStatus) {
        return (



            <section className="w-full p-12 md:p-24 lg:p-32 h-[70vh]">


                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Welcome</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Blog</h2>
                    <p className="text-muted-foreground md:text-xl">Sign in to access our latest blog posts and insights.</p>
                    <Link
                        to={`/login`}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium  border  bg-black text-white "
                    >
                        Login
                    </Link>
                </div>

            </section>


        )
    }
    if (!posts.length) {
        return (



            <section className="w-full py-12 md:py-24 lg:py-32 h-[70vh]">
                <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    No Posts to show...
                </div>
            </section>


        )
    }
    return (
        <div className=' mx-auto w-full  min-h-[90vh]'>


            {posts[0] && <section className="w-full py-12 md:py-24 lg:py-32 px-5 md:px-10 lg:px-14">
                <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <img
                            src={appwriteService?.getFilePreview(posts[0]?.featuredImage)}
                            width="550"
                            height="310"
                            alt="Featured Post"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm border">Featured Post</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {
                                posts[0]?.title
                            }
                        </h2>
                        <p className="text-muted-foreground md:text-xl">
                            {parse(posts[0]?.content).props.children.slice(0, 200)}
                        </p>
                        <Link
                            to={`/post/${posts[0]?.$id}`}
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium  border  bg-black text-white "
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </section>}
            <section className="w-full   bg-gray-200 p-5 md:p-14 lg:p-20 h-[90vh] mt-10">
                <div className="container space-y-8 ">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Blog Posts</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Check out our latest blog posts on web development, design, and more.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {posts?.slice(0, 4).map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>

                    <div className='w-full flex justify-end'>
                        <Link
                            to={`/all-posts`}
                            className="inline-flex  items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-medium  border  bg-black text-white "
                        >
                            View All Posts...
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home