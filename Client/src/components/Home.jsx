import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Home = () => {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        document.title = "Home";
        
        const fetchReadme = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/SounaVR/SounaVR/readme');

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.statusText}`);
                }

                const result = await response.json();

                if (result.content) {
                    // ty chatgpt
                    const decodedContent = decodeURIComponent(
                        atob(result.content.replace(/\n/g, ''))
                        .split('')
                        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                        .join('')
                    );
                    setReadmeContent(decodedContent);
                } else {
                    console.error('GitHub API response does not contain content:', result);
                }
            } catch (error) {
                console.error('Error fetching README:', error);
            }
        };

        fetchReadme();
    }, []);

    return (
        <>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readmeContent}</ReactMarkdown>
        </>
    );
};

export default Home;