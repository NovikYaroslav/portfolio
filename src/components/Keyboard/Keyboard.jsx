import { motion } from 'framer-motion';
import '../Keyboard/Keyboard.css';

export default function Keayboard() {
  return (
    <motion.div
      style={{ margin: 'auto' }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 4, duration: 2 },
      }}
    >
      <div className='keyboard'>
        <ul class='keys'>
          <li id='grey'>Esc</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>7</li>
          <li>8</li>
          <li>0</li>
          <li>_</li>
          <li> =</li>
          <li id='yellow'>Delete</li>
        </ul>
        <ul class='keys'>
          <li id='red'>Tab</li>
          <li id='Q'>Q</li>
          <li id='W'>W</li>
          <li id='E'>E</li>
          <li id='R'>R</li>
          <li id='T'>T</li>
          <li id='Y'>Y</li>
          <li id='U'>U</li>
          <li id='I'>I</li>
          <li id='O'>O</li>
          <li id='P'>P</li>
          <li>[</li>
          <li>]</li>
          <li>\</li>
        </ul>
        <ul class='keys'>
          <li id='blue'>Caps</li>
          <li>A</li>
          <li>S</li>
          <li>D</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>;</li>
          <li>""</li>
          <li id='green'>Enter</li>
        </ul>
        <ul class='keys'>
          <li id='rebeca'>Shift</li>
          <li>Z</li>
          <li>X</li>
          <li>C</li>
          <li>V</li>
          <li>B</li>
          <li>N</li>
          <li>M</li>
          <li>,</li>
          <li>.</li>
          <li>?</li>
          <li id='up'>Up</li>
        </ul>
        <ul class='keys'>
          <li id='one'>ctrl</li>
          <li id='one'>alt</li>
          <li id='one'>cmd</li>
          <li id='two'></li>
          <li id='one'>cmd</li>
          <li id='one'>alt</li>
        </ul>
      </div>
    </motion.div>
  );
}
