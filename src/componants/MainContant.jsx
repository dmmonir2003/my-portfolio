import { motion } from 'framer-motion';
import ImageSection from './ImageSection';

const MainContant = () => {
    return (
        <motion.div
            className="w-6/7 mx-auto  h-96"
        >
            <div className="grid grid-cols-7">
                <ImageSection></ImageSection>
                <div className="bg-red-100 col-span-4 my-3"></div>
            </div>
        </motion.div>
    );
};

export default MainContant;










// https://ryancv.bslthemes.com/developer/