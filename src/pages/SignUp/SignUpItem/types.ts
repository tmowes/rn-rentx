export type SignUpItemProps = {
  item: SignUpItem;
};

export type SignUpItem = {
  title: string;
  details: string;
  subtitle: string;
  input1: string;
  input2: string;
  actions: {
    label: string;
    backgroundColor: string;
    action: string;
  }[];
};
