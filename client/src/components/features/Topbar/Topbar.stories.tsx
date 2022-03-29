import { Meta, Story } from '@storybook/react'
import Topbar, { TopbarProps } from './Topbar'

const storyConfig: Meta = {
  title: 'Base/Topbar',
  component: Topbar,
  parameters: {
    componentSubtitle: 'Topbar component for the main layout',
  },
}

const Template: Story<TopbarProps> = (args) => <Topbar {...args} />

const TopbarExample = Template.bind({})

TopbarExample.args = {
  user: {
    username: 'thevinci',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Blue02&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Pale',
    email: 'oriel.absin@gmail.com',
  },
} as TopbarProps

export default storyConfig
export { TopbarExample }
