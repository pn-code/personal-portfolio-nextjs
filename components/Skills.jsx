import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#3855b6] font-semibold">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/html.png"
                                    width={64}
                                    height={64}
                                    alt="HTML"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/css.png"
                                    width={64}
                                    height={64}
                                    alt="CSS"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                        
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/javascript.png"
                                    width={64}
                                    height={64}
                                    alt="JavaScript"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/react.png"
                                    width={64}
                                    height={64}
                                    alt="React"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/firebase.png"
                                    width={64}
                                    height={64}
                                    alt="Firebase"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Firebase</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/node.png"
                                    width={64}
                                    height={64}
                                    alt="node"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/nextjs.png"
                                    width={64}
                                    height={64}
                                    alt="NextJS"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextJS</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/mongo.png"
                                    width={64}
                                    height={64}
                                    alt="mongo"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Mongo</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/github.png"
                                    width={64}
                                    height={64}
                                    alt="Github"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/tailwind.png"
                                    width={64}
                                    height={64}
                                    alt="tailwind"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/express.png"
                                    width={64}
                                    height={64}
                                    alt="express"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Express</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
