import React from 'react';
import { Center, Button } from '@chakra-ui/react';
import VisibilitySensor from 'react-visibility-sensor';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import { useScrollSection } from 'react-scroll-section';
import { animate } from 'motion';
import useTranslation from 'next-translate/useTranslation';

interface ScrollWrapperProps {
  nextId?: string;
  nextText?: string;
  prevId?: string;
  prevText?: string;
  children?: React.ReactNode;
}

export const ScrollWrapper = ({
  nextId,
  nextText = 'Next',
  prevId,
  prevText = 'Prev',
  children,
}: ScrollWrapperProps) => {
  const { t } = useTranslation('common');
  const [showNextBtn, setShowNextBtn] = React.useState<boolean>(false);
  const [showPrevBtn, setShowPrevBtn] = React.useState<boolean>(false);
  const nextSection = useScrollSection(nextId ?? '');
  const prevSection = useScrollSection(prevId ?? '');
  const prevRef = React.useRef<HTMLDivElement | null>(null);
  const nextRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (nextRef.current) {
      animate(
        nextRef.current,
        { bottom: '11%' },
        { duration: 1, repeat: Infinity }
      );
    }
  }, [showNextBtn]);

  React.useEffect(() => {
    if (prevRef.current) {
      animate(
        prevRef.current,
        { top: '4%' },
        { duration: 1, repeat: Infinity }
      );
    }
  }, [showPrevBtn]);

  const onElementVisibility = (isVisible: boolean) => {
    setShowNextBtn(isVisible);
    setShowPrevBtn(isVisible);
  };

  return (
    <>
      <VisibilitySensor onChange={onElementVisibility}>
        {children}
      </VisibilitySensor>
      {showPrevBtn && prevId && (
        <Center ref={prevRef} width="100%" pos="absolute" top="5%">
          <Button
            variant="ghost"
            leftIcon={<FiChevronsUp />}
            onClick={prevSection.onClick}
          >
            {t(prevText)}
          </Button>
        </Center>
      )}
      {showNextBtn && nextId && (
        <Center ref={nextRef} width="100%" pos="absolute" bottom="10%">
          <Button
            variant="ghost"
            leftIcon={<FiChevronsDown />}
            onClick={nextSection.onClick}
          >
            {t(nextText)}
          </Button>
        </Center>
      )}
    </>
  );
};
