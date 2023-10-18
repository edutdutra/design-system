import {Meta, StoryObj} from "@storybook/react";
import {Text, TextProps} from "@ignite-ui/react";

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet. Id atque dolores aut quia aliquid qui rerum impedit sit omnis exercitationem sit enim sint aut nihil repellat! Sit facilis distinctio cum commodi rerum eos nesciunt repellendus. Ut autem rerum sed culpa beatae in dolorem dolorum. Non perferendis adipisci ex deserunt accusantium eum voluptatem atque sit debitis ipsam qui voluptas voluptates et facere unde sed ullam eveniet.'
    },
    argTypes: {
        size: {
            options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}