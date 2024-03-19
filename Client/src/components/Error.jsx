const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Oops!</h1>
            <p>Looks like you're lost in the void...</p>
            <p>But don't worry, our highly trained hamsters are on it!</p>
            <img src="https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif" alt="Hamster running in wheel" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
            <p>Meanwhile, you can go back to <a href="/">home</a>.</p>
        </div>
    )
}

export default Error;