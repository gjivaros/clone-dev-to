export const API_URL = 'https://dev.to/stories/feed/';
export const API_LISTING_URL = 'https://dev.to/api/listings';
export const BlogAsItem: IBlog = {
  title: 'The Complete Guide to Full Stack Web3 Development',
  path: '/dabit3/the-complete-guide-to-full-stack-web3-development-4g74',
  id: 982888,
  user_id: 126437,
  comments_count: 15,
  public_reactions_count: 1453,
  organization_id: null,
  reading_time: 27,
  video_thumbnail_url: null,
  video: null,
  video_duration_in_minutes: '00:00',
  experience_level_rating: 6.34782608695652,
  experience_level_rating_distribution: 9,
  user: {
    name: 'Nader Dabit',
    username: 'dabit3',
    slug: 'dabit3',
    profile_image_90:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--qYNR4ugk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/126437/41231eb2-054b-4417-bc35-814e491a2d5d.jpeg',
    profile_image_url:
      'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/126437/41231eb2-054b-4417-bc35-814e491a2d5d.jpeg',
  },
  pinned: false,
  main_image:
    'https://res.cloudinary.com/practicaldev/image/fetch/s--3wa8vtB8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/maq07rzwhayt5qvwarw6.jpg',
  tag_list: ['web3', 'blockchain', 'solidity', 'webdev'],
  readable_publish_date: 'Feb 10',
  flare_tag: null,
  class_name: 'Article',
  cloudinary_video_url: null,
  published_at_int: 1644496438,
  published_timestamp: '2022-02-10T12:33:58Z',
  top_comments: [],
};

export const ListingAsItem: IListing = {
  type_of: 'listing',
  id: 4334,
  title: 'official.dev',
  slug: 'official-dev-68n',
  body_markdown:
    "It's all about connecting! It's all about connecting and building a solution together. Join in to make the community of developers. If you believe in solving challenges and making solutions for the web world, you are in the right place. We are looking for an expert solution with a developer who could accept this independently. We are building a digital identity for the developers.",
  category: 'forhire',
  processed_html:
    "<p>It's all about connecting!</p> <p>It's all about connecting and building a solution together.</p> <p>Join in to make the community of developers.</p> <p>If you believe in solving challenges and making solutions for the web world, you are in the right place. </p> <p>We are looking for an expert solution with a developer who could accept this independently. </p> <p>We are building a digital identity for the developers.</p> ",
  published: true,
  listing_category_id: 2,
  tag_list: 'webdev, programming, opensource',
  tags: ['webdev', 'programming', 'opensource'],
  created_at: '2022-02-12T00:14:12Z',
  user: {
    name: 'official.page',
    username: 'officialpage',
    twitter_username: 'OfficialDotPage',
    github_username: 'OfficialDotPage',
    website_url: 'https://official.page',
    profile_image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--_3UgNeCy--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/720893/e9384f9b-07fe-4d0f-a034-ff9c75a4f576.png',
    profile_image_90:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--7_6os1Ul--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/720893/e9384f9b-07fe-4d0f-a034-ff9c75a4f576.png',
  },
};

export interface IListing {
  type_of: string;
  id: number;
  title: string;
  slug: string;
  body_markdown: string;
  category: string;
  processed_html: string;
  published: boolean;
  listing_category_id: number;
  tag_list: string;
  tags: string[];
  created_at: string;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
}

export interface IBlog {
  title: string;
  path: string;
  id: number;
  user_id: number;
  comments_count: number;
  public_reactions_count: number;
  organization_id: null | number;
  reading_time: number;
  video_thumbnail_url: string | null;
  video: string | null;
  video_duration_in_minutes: string;
  experience_level_rating: number;
  experience_level_rating_distribution: number;
  user: IUser;
  pinned: boolean;
  main_image: string;
  tag_list: string[];
  readable_publish_date: string;
  flare_tag: null | string;
  class_name: string;
  cloudinary_video_url: null | string;
  published_at_int: number;
  published_timestamp: string;
  top_comments: [];
}
export interface IUser {
  name: string;
  username: string;
  slug: string;
  profile_image_90: string;
  profile_image_url: string;
}
