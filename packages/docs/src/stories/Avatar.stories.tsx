import {Meta, StoryObj} from "@storybook/react";
import {Avatar, AvatarProps} from "@edutdutra-ignite/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/edutdutra.png',
        alt: 'Eduardo Dutra'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}