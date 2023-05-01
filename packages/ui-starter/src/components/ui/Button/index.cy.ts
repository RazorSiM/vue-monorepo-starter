import UiButton, {
  colorToClasses,
  elevationToClasses,
  sizeToClasses,
} from './index.vue'
import type { UiButtonProps } from './index.vue'

const defaultProps: UiButtonProps = {
  color: 'primary',
  size: 'md',
  elevation: 'md',
  type: 'button',
  disabled: false,
  loading: false,
}
// test suite with cypress
describe('UiButton', () => {
  const slots = {
    default: 'Default Slot',
    icon: 'Icon Slot',
  }
  it('renders a button with a slot', () => {
    // @ts-expect-error cypress typings missing for vue
    cy.mount(UiButton, {
      props: {
        ...defaultProps,
      },
      slots,
    })
    cy.get('button').contains('Default Slot')
  })
  it('emit a click event when clicked', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    // @ts-expect-error cypress typings missing for vue
    cy.mount(UiButton, {
      slots,
      props: {
        ...defaultProps,
        onClick: onClickSpy,
      },
    })
    cy.get('button').click()
    cy.get('@onClickSpy').should('have.been.called')
  })
  it('apply the correct color classes', () => {
    const colorKeys = Array.from(colorToClasses.keys())
    colorKeys.forEach((color) => {
      // @ts-expect-error cypress typings missing for vue
      cy.mount(UiButton, {
        slots,
        props: {
          color,
        },
      })
      cy.get('button').should('have.class', colorToClasses.get(color))
    })
  })
  it('apply the correct size classes', () => {
    const sizeKeys = Array.from(sizeToClasses.keys())
    sizeKeys.forEach((size) => {
      // @ts-expect-error cypress typings missing for vue
      cy.mount(UiButton, {
        slots,
        props: {
          size,
        },
      })
      cy.get('button').should('have.class', sizeToClasses.get(size))
    })
  })
  it('apply the correct elevation classes', () => {
    const elevationKeys = Array.from(elevationToClasses.keys())
    elevationKeys.forEach((elevation) => {
      // @ts-expect-error cypress typings missing for vue
      cy.mount(UiButton, {
        slots,
        props: {
          elevation,
        },
      })
      cy.get('button').should('have.class', elevationToClasses.get(elevation))
    })
  })
})
