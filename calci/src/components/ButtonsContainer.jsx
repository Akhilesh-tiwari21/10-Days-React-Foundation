
import { motion } from "framer-motion";

const ButtonsContainer = ({ handleClick }) => {
    const buttons = [
        "C", "/", "*", "-",
        "7", "8", "9", "+",
        "4", "5", "6", "=",
        "1", "2", "3", "0",
        ".",
    ];

    return (
    <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, index) => (
            <motion.button
                key={index}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick(btn)}
                className="bg-gray-200 p-3 rounded text-2xl text-gray-400 font-semibold hover:bg-gray-400 transition"
                >
                    {btn}
            </motion.button>
        ))}
    </div>
    );
};

export default ButtonsContainer;
