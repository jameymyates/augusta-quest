import Link from "next/link";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/features/ui/button";

const SecondaryMenu = () => {
  return (
    <div className="inline-flex flex-1 flex-row items-center justify-end gap-x-3 lg:order-2">
      <Button className="hidden lg:inline-flex" intent="link">
        <Link href="#">Sign In</Link>
      </Button>
      <Button className="hidden lg:inline-flex" intent="secondary">
        <Link href="#">
          Get Started
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </Button>
    </div>
  );
};

export default SecondaryMenu;
