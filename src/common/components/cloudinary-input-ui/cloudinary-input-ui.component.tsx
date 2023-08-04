import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC, useRef } from "react";
import { Button } from "react-admin";

interface CloudinaryInputUIProps {
  label: string;
  onImageSelected: (image: File) => void;
  disabled: boolean;
  value?: string;
}

export const CloudinaryInputUi: FC<CloudinaryInputUIProps> = ({
  label,
  value,
  onImageSelected,
  disabled,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const [file] = Array.from(e.target.files);

    onImageSelected(file);
  };

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(value);

  image.resize(thumbnail().width(384).height(240));
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          <CardContent>
            {value ? (
              <AdvancedImage cldImg={image} width={384} height={240} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={384}
                height={247}
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            )}
          </CardContent>
        </CardContent>
        <CardActions>
          <Button
            onClick={onUploadClick}
            variant="contained"
            disabled={disabled}
          >
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
