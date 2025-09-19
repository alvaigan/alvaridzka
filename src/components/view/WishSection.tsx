"use client";

import { PaperPlaneRightIcon, PaperPlaneTiltIcon, ShareFatIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { createComment, getComments } from "@/app/actions";

gsap.registerPlugin(ScrollTrigger);

type Comment = {
    name: string;
    comment: string;
};

const WishSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [inputComment, setInputComment] = useState<Comment>({
        name: "",
        comment: "",
    })

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const title = containerRef.current.querySelector("h1");
            const formElements = Array.from(
                containerRef.current.querySelectorAll("input, textarea, button"),
            );
            const comments = Array.from(
                containerRef.current.querySelectorAll(".comment-item"),
            );

            gsap.set([title, ...formElements, ...comments], { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            if (title) {
                tl.to(title, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                });
            }

            tl.to(
                formElements,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                "-=0.4",
            );

            tl.to(
                comments,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.4",
            );
        },
        { scope: containerRef },
    );

    useEffect(() => {
        const commentsData = getComments();

        commentsData.then((data) => {
            const receivedComments: Comment[] = data.map((comment: any) => ({
                name: comment.name,
                comment: comment.comment
            }))
            setComments(receivedComments);
        });
    }, [])

    const handleSendComment = () => {
        if (inputComment.name.trim() !== "" && inputComment.comment.trim() !== "") {
            const newComment = {
                name: inputComment.name,
                comment: inputComment.comment
            }
            console.log("new comment", newComment);
            createComment(newComment.name, newComment.comment).then(() => {
                const commentsData = getComments();
                commentsData.then((data) => {
                    const receivedComments: Comment[] = data.map((comment: any) => ({
                        name: comment.name,
                        comment: comment.comment
                    }))
                    setComments(receivedComments);
                });
            }).catch((error) => {
                console.log(error);
                alert("Terjadi kesalahan saat mengirim ucapan.");
            });
            setInputComment({ name: "", comment: "" });

            alert("Terimakasih telah mengirim ucapan.");
        } else {
            alert("Nama dan ucapan harus diisi.");
        }
    }

    return (
        <div
            ref={containerRef}
            className="flex flex-col chivo-font z-10 bg-light bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y pb-20"
        >
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl cookie-font text-center border-b border-black text-black mt-10">
                    {"Ucapan & Do'a"}
                </h1>
            </div>
            <div className="flex flex-col px-5 py-10 rounded-4xl bg-[#B48673] gap-5 mx-5 my-5  drop-shadow-lg">
                <input
                    type="text"
                    placeholder="Masukkan Nama"
                    className="bg-white rounded-lg py-2 px-4"
                    onChange={(e) => setInputComment({ ...inputComment, name: e.target.value })}
                    value={inputComment.name}
                />

                <textarea
                    placeholder="Masukkan Ucapan"
                    className="bg-white rounded-lg py-2 px-4"
                    onChange={(e) => setInputComment({ ...inputComment, comment: e.target.value })}
                    value={inputComment.comment}
                />

                <button className="bg-dark rounded-lg py-2 px-4 text-white" onClick={handleSendComment}>
                    Kirim <ShareFatIcon className="inline ml-2" weight="duotone" />
                </button>

                {comments.length > 0 && (
                    <div className="flex flex-col gap-4 chivo-font text-sm overflow-y-scroll h-50">
                        {comments.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="comment-item flex flex-col gap-2 border-t border-[#ECDCCB] py-4"
                            >
                                <h3 className="font-bold">{item.name}</h3>
                                <p>{item.comment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishSection;
