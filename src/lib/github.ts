import { Octokit } from 'octokit';
import * as yaml from 'js-yaml';
import type { TagsList } from '@/types/config';
import { PageHeader } from '@/types/config';
import { ContentData } from '@/types/gitfub-api';

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
export async function getContentsList(
  path: string,
): Promise<Array<ContentData>> {
  const owner = '449sabu';
  const repository = 'cardano-learning-contents';
  try {
    const repo = await octokit.request(
      `GET /repos/${owner}/${repository}/contents/src/contents/${path}`,
      {
        owner: owner,
        repo: repository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    return repo.data;
  } catch (error) {
    throw new Error(`Try Octokit Error ${error}`);
  }
}

/**
 * 各区コンテンツのタグ一覧を取得する関数
 */
export async function getConfigYaml(path: string): Promise<PageHeader> {
  const owner = '449sabu';
  const repository = 'cardano-learning-contents';
  try {
    const repo = await octokit.request(
      `GET /repos/${owner}/${repository}/contents/${path}`,
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
      const data = yaml.load(yamlText) as PageHeader;
      return data;
    } catch (error) {
      throw new Error(`Download Row Error ${error}`);
    }
  } catch (error) {
    throw new Error(`Try Octokit Error ${error}`);
  }
}
