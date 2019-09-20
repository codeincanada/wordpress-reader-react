import React, { useState } from 'react';
import styles from './Post.module.scss';

const Post = (props: any) => {
    const [expandPost, setExpandPost] = useState(false);
    const [showContent, setShowContent] = useState(false);

    // TODO: Emit an event to the parent to notify a post was selected
    const post = props.in;

    if (!post) {
        return <h1>Post not loaded</h1>;
    } else {
        return (
            <article className={styles.NewRoot}>
                <main className={styles.Root} key={post.id}>
                    <h2
                        className={styles.PostTitleContainer}
                        title={'Post ID = ' + post.id}
                        onClick={() => setExpandPost(!expandPost)}
                    >
                        {/* <a href={post.link} className={styles.LinkWrapper}> */}
                        {post.title.rendered}
                        {/* </a> */}
                    </h2>
                    {expandPost && (
                        <aside className={styles.PostFooter}>
                            {expandPost && (
                                <div className={styles.ButtonContainer}>
                                    {/* TODO: Service Worker and Local Storage */}
                                    <button id="save">
                                        <span role="img" aria-label="Icon">
                                            ⏰
                                        </span>{' '}
                                        Save offline
                                    </button>
                                    {/* TODO: post.excerpt.rendered */}
                                    <button
                                        id="expand"
                                        onClick={() =>
                                            setShowContent(!showContent)
                                        }
                                    >
                                        <span role="img" aria-label="Icon">
                                            🎶
                                        </span>
                                        Read now
                                    </button>
                                    {/* TODO: Local state and Class manipulation */}
                                    <button id="hide">
                                        <span role="img" aria-label="Icon">
                                            ✋
                                        </span>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </aside>
                    )}
                </main>
                {showContent && (
                    <aside
                        className={styles.Content}
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                        }}
                    >
                        {/* Alternatively, we could display the published page untouched  */}
                        {/* <iframe src={post.guid.rendered} title={post.slug} style={{"width": "100%", "height": "90vh"}}/> */}
                    </aside>
                )}
            </article>
        );
    }
};

export default Post;
