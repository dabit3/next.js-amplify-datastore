import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}