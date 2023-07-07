interface IBlockchainBadge {
  label: string;
  src: string;
}

const BlockchainBadges: IBlockchainBadge[] = [
  {
    label: 'Javascript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'
  },
  {
    label: 'Typescript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'
  },
  {
    label: 'Docker',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg'
  },
  {
    label: 'NodeJS',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    label: 'Go',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg'
  },
  {
    label: 'Solidity',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg',
  }
];

export default BlockchainBadges;
