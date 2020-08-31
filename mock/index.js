import Mock from "mockjs";
import { getUserInfo } from "./user";

let data = Mock.mock(/\/login/, "get", getUserInfo);

export default data;
