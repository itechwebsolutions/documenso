import { Link, Section, Text } from '../components';

export type TemplateFooterProps = {
  isDocument?: boolean;
};

export const TemplateFooter = ({ isDocument = true }: TemplateFooterProps) => {
  return (
    <Section>
      <Text className="my-8 text-sm text-slate-400">
        </Text>
    </Section>
  );
};

export default TemplateFooter;
