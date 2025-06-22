export class ResponseUtil {
  static success<T>(data?: T, message: string = 'Operation successful') {
    return {
      success: true,
      message,
      data,
    };
  }

  static successDelete(id: string | number, entityName: string = 'Record') {
    return {
      success: true,
      message: `${entityName} with ID ${id} has been deleted successfully`,
    };
  }
}
