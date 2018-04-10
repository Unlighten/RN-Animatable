function makeSlideInTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: 0,
    },
    to: {
      [translationType]: 0,
    },
  };
}

export const slideInDown = makeSlideInTranslation('translateY', -50);

export const slideInUp = makeSlideInTranslation('translateY', 100);

export const slideInLeft = makeSlideInTranslation('translateX', -100);

export const slideInRight = makeSlideInTranslation('translateX', 100);
