import styled, {css} from 'styled-components';
import Shipment from '../../interfaces/Shipment';
import {
  CheckedBoxIcon,
  CheckMarkIcon,
  DocumentCheckedIcon,
  HandHoldingBoxIcon,
  ShippingTruckIcon,
} from '../Icons';

const STEPS = [
  {label: 'تم إنشاء الشحنة', Icon: DocumentCheckedIcon},
  {label: 'تم استلام الشحنة', Icon: HandHoldingBoxIcon},
  {label: 'الشحنة خرجت للتسليم', Icon: ShippingTruckIcon},
  {label: 'تم التسليم', Icon: CheckedBoxIcon},
] as const;

type ProgressIndicatorProps = {
  currentStep?: 0 | 1 | 2 | 3;
  statusColor: string;
  shipment: Shipment;
};

export default function ShipmentProgressIndicator({
  shipment: {TransitEvents},
  statusColor,
}: ProgressIndicatorProps) {
  const currentStep = TransitEvents.find(({state}) => state === 'DELIVERED')
    ? 3
    : TransitEvents.find(({state}) => state === 'OUT_FOR_DELIVERY')
    ? 2
    : TransitEvents.find(({state}) => state === 'PACKAGE_RECEIVED')
    ? 1
    : 0;

  return (
    <Wrapper>
      <Container>
        <Bar>
          <Progress
            value={currentStep / (STEPS.length - 1)}
            color={statusColor}
          />
        </Bar>
        <StepsRow>
          {STEPS.map((step, index) => (
            <Step
              step={step}
              isComplete={index < currentStep + 1}
              isLast={index === currentStep && currentStep !== STEPS.length - 1}
              color={statusColor}
            />
          ))}
        </StepsRow>
      </Container>
    </Wrapper>
  );
}

type StepProps = {
  step: typeof STEPS[number];
  isComplete: boolean;
  isLast: boolean;
  color: string;
};

function Step({step, isComplete, isLast, color}: StepProps) {
  const Icon = isComplete && !isLast ? CheckMarkIcon : step.Icon;
  return (
    <StepWrapper>
      <StepCircle isComplete={isComplete} isLast={isLast} color={color}>
        <Icon width={12} height={12} />
      </StepCircle>
      <StepLabel isComplete={isComplete}>{step.label}</StepLabel>
    </StepWrapper>
  );
}

const Wrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const Container = styled.div`
  padding: 2em 1em;
  min-width: 600px;
`;

const BAR_HEIGHT = 10;

const Bar = styled.div`
  margin: 0 auto;
  height: ${BAR_HEIGHT}px;
  width: calc(100% - 2 * ${BAR_HEIGHT}px);
  background-color: #eee;
`;

const Progress = styled.div<{value: number; color: string}>`
  height: 100%;
  width: ${({value}) => value * 100}%;
  max-width: 100%;
  background-color: ${({color}) => color};
`;

const StepsRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: calc(-1.5 * ${BAR_HEIGHT}px);
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -15px;
  :first-child {
    align-items: flex-start;
  }
  :last-child {
    align-items: flex-end;
  }
`;

const StepCircle = styled.div<{
  isComplete: boolean;
  isLast: boolean;
  color: string;
}>`
  position: relative;
  width: ${BAR_HEIGHT * 2}px;
  height: ${BAR_HEIGHT * 2}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${({isComplete}) => (isComplete ? '#fff' : '#aaa')};
  background-color: ${({isComplete, color}) => (isComplete ? color : '#fff')};
  border: 1px solid transparent;
  border-color: ${({isComplete}) => !isComplete && '#aaa'};
  ${({isLast, isComplete}) =>
    (isLast || !isComplete) &&
    css`
      transform: scale(2);
    `}
`;

const StepLabel = styled.div<{isComplete: boolean}>`
  position: absolute;
  top: calc(${BAR_HEIGHT}px + 1.5em);
  color: ${({isComplete}) => !isComplete && 'gray'};
  font-size: 0.875em;
`;
