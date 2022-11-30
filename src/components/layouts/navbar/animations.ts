export const menuVariants = {
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    x: "100%",
    transition: {
      duration: 0.2,
    },
  },
};

export const navlinksVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const middleLineVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const topLineVariants = {
  visible: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    rotate: -45,
    y: 6,
    transition: {
      duration: 0.2,
    },
  },
};

export const bottomLineVariants = {
  visible: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    rotate: 45,
    y: -6,
    transition: {
      duration: 0.2,
    },
  },
};

export const listContianerVariant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const contianerVariant = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const linksContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 0.4,
      delayChildren: 1.6,
      staggerChildren: 0.2,
    },
  },
};

export const linkVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
