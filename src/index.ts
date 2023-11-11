export type EmailUser = {
  email: string;
  name: string;
};

export type MailerOptions = {
  sender: EmailUser;
  to: EmailUser[];
  replyTo?: EmailUser;
  subject?: string;
  htmlContent?: string;
  attachment?: { url?: string; content?: string; name: string }[];
  templateId?: number;
  params?: {
    [key: string]: string;
  };
};

export type ContactOptions = {
  email: string;
  listIds: number[];
  updateEnabled: boolean;
  attributes: Record<string, string>;
};

export interface ContactInfo {
  email: string;
  id: number;
  emailBlacklisted: boolean;
  smsBlacklisted: boolean;
  createdAt: string;
  modifiedAt: string;
  attributes: Attributes;
  listIds?: number[] | null;
  statistics: Statistics;
}
export interface Attributes {
  FIRST_NAME: string;
  LAST_NAME: string;
  SMS: string;
  CIV: string;
  DOB: string;
  ADDRESS: string;
  ZIP_CODE: string;
  CITY: string;
  AREA: string;
}
export interface Statistics {
  messagesSent?: MessagesSentEntity[] | null;
  opened?: OpenedEntityOrDeliveredEntity[] | null;
  clicked?: ClickedEntity[] | null;
  delivered?: OpenedEntityOrDeliveredEntity[] | null;
}
export interface MessagesSentEntity {
  campaignId: number;
  eventTime: string;
}
export interface OpenedEntityOrDeliveredEntity {
  campaignId: number;
  count: number;
  eventTime: string;
  ip: string;
}
export interface ClickedEntity {
  campaignId: number;
  links?: LinksEntity[] | null;
}
export interface LinksEntity {
  count: number;
  eventTime: string;
  ip: string;
  url: string;
}

export * from './emailClient.js';
