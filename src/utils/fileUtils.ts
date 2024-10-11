
import { convertXML } from 'simple-xml-to-json';

export const getFiles = async (xmlFiles: FileList): Promise<any[]> => {
  const readFile = (file: File): Promise<{name: string, content: string | ArrayBuffer | null | undefined}> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve({name: file.name, content: e?.target?.result});
      };
      fileReader.onerror = () => {
        reject(new Error("Failed to read file"));
        };
      fileReader.readAsText(file);
    });
  };

  const filePromises = Array.from(xmlFiles).map(file => readFile(file));
  return await Promise.all(filePromises);
};

export const parseFiles = async (filesData: {name: string, content: string}[]): Promise<any[]> => {
    const parsedData = []
    for (const file of filesData) {
        const parsedXml = await convertXML(file.content);
        parsedData.push({name: file.name, content: parsedXml});
    }
    return parsedData;
}

export function flattenObject(
  obj: any, // or a more specific type if you know the structure
  parentKey = '',
  result: { [key: string]: any } = {} // Explicitly define that result is an object with string keys
): { [key: string]: any } {
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        if (key === 'children' && Array.isArray(obj[key])) {
            obj[key].forEach((child: any) => flattenObject(child, parentKey, result));
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            flattenObject(obj[key], newKey, result);
        } else {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            result[newKey] = obj[key];  // This line is now safe
        }
    }

    return result;
}
