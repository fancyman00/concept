import type { Schema, Attribute } from '@strapi/strapi';

export interface AdAndDisadAdvantagesAndDisadvantages extends Schema.Component {
  collectionName: 'components_ad_and_disad_advantages_and_disadvantages';
  info: {
    displayName: 'Advantages And Disadvantages';
    icon: 'layer';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Component<'description.description', true>;
  };
}

export interface DescriptionDescription extends Schema.Component {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'Description';
    icon: 'message';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'ad-and-disad.advantages-and-disadvantages': AdAndDisadAdvantagesAndDisadvantages;
      'description.description': DescriptionDescription;
    }
  }
}
