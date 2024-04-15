class VisitorCounter {
  constructor(db) {
    this.db = db;
    this.collection = db.collection("visitors");
  }

  async incrementVisitorCount() {
    const counterDoc = this.collection.doc("Visitors");
    try {
      const newCount = await this.db.runTransaction(async (transaction) => {
        const doc = await transaction.get(counterDoc);
        if (!doc.exists) {
          await transaction.set(counterDoc, { numberVisitors: 1 });
          return 1;
        }
        const newVisitorCount = doc.data().numberVisitors + 1;
        transaction.update(counterDoc, { numberVisitors: newVisitorCount });
        return newVisitorCount;
      });
      return newCount;
    } catch (error) {
      console.error("Error incrementing visitor count: ", error);
      throw error;
    }
  }

  async getCurrentVisitorCount() {
    const counterDoc = this.collection.doc("Visitors");
    try {
      const doc = await counterDoc.get();
      return doc.exists ? doc.data().numberVisitors : 0;
    } catch (error) {
      console.error("Error getting visitor count: ", error);
      throw error;
    }
  }
}

module.exports = VisitorCounter;
