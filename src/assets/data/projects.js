import { v4 as uuidv4 } from 'uuid';
import condestavelImg from '../images/condestavel.jpg';
import hsmImg from '../images/hsm.jpg';
import rc3Img from '../images/rc3.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'O Condestável',
    desc:
      'A mobile indie game developed in Unity 3d about Portugal History.',
    img: condestavelImg,
  },
  {
    id: uuidv4(),
    name: 'HSM',
    desc:
      'A mobile strategy sport game developed in Unity 3d.',
    img: hsmImg,
  },
  {
    id: uuidv4(),
    name: 'RC3',
    desc:
      'A Virtual Visit to the army headquarters in Estremoz.',
    img: rc3Img,
  }
];

export default projects;
