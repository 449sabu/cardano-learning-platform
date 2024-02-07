import { Octokit } from 'octokit';
import * as yaml from 'js-yaml';
import { TagsList } from '@/components/sidebar';
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN || '' });

/**
 * 各区コンテンツのタグ一覧を取得する関数
 */
export async function getTags(): Promise<TagsList> {
  const owner = '449sabu';
  const repository = 'cardano-learning-contents';
  try {
    const repo = await octokit.request(
      `GET /repos/${owner}/${repository}/contents/src/contents/tags.yaml`,
      {
        owner: owner,
        repo: repository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    try {
      const response = await fetch(repo.data.download_url, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const yamlText = await response.text();
      const data = yaml.load(yamlText) as TagsList;
      return data;
    } catch (error) {
      throw new Error(`Download Row Error ${error}`);
    }
  } catch (error) {
    throw new Error(`Try Octokit Error ${error}`);
  }
}

/**
 *
 */
export async function getSingleFileData(uri: string) {
  try {
    const response = await fetch(uri, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

/**
 *
 */
export async function getContentsList(category: string) {
  const owner = '449sabu';
  const repository = 'cardano-learning-contents';
  try {
    const repo = await octokit.request(
      `GET /repos/${owner}/${repository}/contents/src/contents/${category}`,
      {
        owner: owner,
        repo: repository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    // console.log(repo.data.map((item) => item.name));
    return repo.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}
