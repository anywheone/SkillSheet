export type PersonalInfo = {
  name: string;
  nameKana: string;
  age: number;
  gender: string;
  location: string;
  nearestStation: string;
  education: string;
  certifications: string[];
};

export const personalInfo: PersonalInfo = {
  name: '今泉 達也',
  nameKana: 'T.I',
  age: 39,
  gender: '男性',
  location: '神奈川県川崎市多摩区',
  nearestStation: '小田急線 向ヶ丘遊園駅',
  education: '某調理師専門学校 卒業',
  certifications: [
    'Microsoft Office Specialist Word 2013',
    'Microsoft Office Specialist Excel 2013',
    'パソコン検定準２級',
  ],
};

// ヘッダーコンポーネント用の共通情報
export const HEADER_INFO = {
  displayName: 'T.I',
  email: 'tatsuya.april22@gmail.com',
  location: '神奈川, 日本',
  nearestStation: '小田急線 向ヶ丘遊園駅',
  github: 'https://github.com/anywheone',
  linkedin: 'https://www.linkedin.com/in/tatsuya-undefined-67a17838b/',
} as const;

// フッター用の共通情報
export const FOOTER_INFO = {
  copyright: 'T.I',
  lastUpdated: '2025年1月',
} as const;
