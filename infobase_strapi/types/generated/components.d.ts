import type { Schema, Attribute } from '@strapi/strapi';

export interface MissionStatementMissionAndVision extends Schema.Component {
  collectionName: 'components_mission_statement_mission_and_visions';
  info: {
    displayName: 'Mission and vision';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    statement: Attribute.Text;
    type: Attribute.Enumeration<['mission', 'vision', 'core values']>;
  };
}

export interface SpeakerHandleSpeaker extends Schema.Component {
  collectionName: 'components_speaker_speakers';
  info: {
    displayName: 'Speaker Handle';
    icon: 'folder';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    platform: Attribute.Enumeration<['facebook', 'twitter', 'instagram']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mission-statement.mission-and-vision': MissionStatementMissionAndVision;
      'speaker-handle.speaker': SpeakerHandleSpeaker;
    }
  }
}
