export default function Footer() {
    return (
        <footer 
            className="bottom-0 w-full border-black border-2"
            style={{ backgroundColor: 'rgb(36, 36, 36)' }}
        >
                <p className="text-lg text-white text-center">
                    &copy;{new Date().getFullYear()} Kawaljeet Singh. All rights reserved.
                </p>
        </footer>
    );
}