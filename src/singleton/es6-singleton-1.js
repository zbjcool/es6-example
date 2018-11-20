class Singleton {
  constructor(name) {
      this.name = name;
      this.instance = null;
  }
  // 构造一个广为人知的接口，供用户对该类进行实例化
  static getInstance(name) {
      if(!this.instance) {
          this.instance = new Singleton(name);
      }
      return this.instance;
  }
}

export default Singleton